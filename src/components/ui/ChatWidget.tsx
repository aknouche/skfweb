'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CHAT_FALLBACK,
  CHAT_GREETING,
  CHAT_TOPICS,
  findChatTopic,
} from '@/lib/data/chatbot';

interface ChatMessage {
  id: string;
  from: 'bot' | 'user';
  text: string;
  link?: { href: string; text: string };
}

const STORAGE_KEY = 'skf-chat-dismissed';

function createMessage(
  from: ChatMessage['from'],
  text: string,
  link?: ChatMessage['link']
): ChatMessage {
  return { id: `${from}-${Date.now()}-${Math.random()}`, from, text, link };
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage('bot', CHAT_GREETING),
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  // Widget starts closed and stays quiet — it only opens if the visitor
  // clicks it, and remembers if they've previously closed it.
  useEffect(() => {
    setDismissed(localStorage.getItem(STORAGE_KEY) === '1');

    // The cookie banner shares the bottom-right corner until it's
    // answered, so lift the launcher above it to avoid overlap.
    setCookieBannerVisible(!localStorage.getItem('cookie-consent'));
    const onConsentChange = () => setCookieBannerVisible(false);
    window.addEventListener('skf-cookie-consent-changed', onConsentChange);
    return () =>
      window.removeEventListener('skf-cookie-consent-changed', onConsentChange);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open]);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  function close() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  }

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const topic = findChatTopic(trimmed);
    setMessages((prev) => [
      ...prev,
      createMessage('user', trimmed),
      topic
        ? createMessage('bot', topic.answer, topic.link)
        : createMessage('bot', CHAT_FALLBACK),
    ]);
    setInput('');
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div
      className={`fixed right-4 z-40 transition-[bottom] sm:right-6 ${
        cookieBannerVisible ? 'bottom-24 sm:bottom-28' : 'bottom-4 sm:bottom-6'
      }`}
    >
      {open && (
        <div
          role="dialog"
          aria-label="Chatt med Svenska Kickboxningsförbundet"
          className="mb-3 flex h-[28rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-skf-blue px-4 py-3">
            <p className="text-sm font-semibold text-white">SKF Hjälpassistent</p>
            <button
              onClick={close}
              aria-label="Stäng chatten"
              className="rounded p-1 text-white/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-yellow"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.from === 'bot'
                    ? 'mr-auto max-w-[85%] rounded-lg rounded-tl-none bg-gray-100 px-3 py-2 text-sm text-gray-800'
                    : 'ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-skf-blue px-3 py-2 text-sm text-white'
                }
              >
                <p>{message.text}</p>
                {message.link && (
                  <Link
                    href={message.link.href}
                    className="mt-1 inline-block font-semibold text-skf-blue underline"
                  >
                    {message.link.text}
                  </Link>
                )}
              </div>
            ))}

            {/* Quick-reply topic chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {CHAT_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => ask(topic.label)}
                  className="rounded-full border border-skf-blue/30 px-3 py-1 text-xs font-medium text-skf-blue transition-colors hover:bg-skf-blue hover:text-white"
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-gray-200 p-3">
            <label htmlFor="chat-input" className="sr-only">
              Skriv din fråga
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Skriv din fråga..."
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-skf-blue focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-skf-yellow px-3 py-2 text-sm font-semibold text-skf-blue transition-opacity hover:opacity-90"
            >
              Skicka
            </button>
          </form>
        </div>
      )}

      {/* Launcher button */}
      <button
        onClick={toggleOpen}
        aria-expanded={open}
        aria-label={open ? 'Stäng chatten' : 'Öppna chatt'}
        className="relative ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-skf-blue text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-yellow"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && !dismissed && (
          <span
            className="absolute right-0 top-0 h-3 w-3 rounded-full bg-skf-yellow"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
