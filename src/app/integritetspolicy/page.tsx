import type { Metadata } from 'next';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Information om hur Svenska Kickboxningsförbundet hanterar personuppgifter och cookies.',
};

export default function IntegritetspolicyPage() {
  return (
    <main className="py-16">
      <div className="container-wide max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-skf-blue">Integritetspolicy</h1>
        <p className="mb-10 text-sm text-gray-500">Senast uppdaterad: februari 2026</p>

        <div className="space-y-10 text-gray-800">

          <section>
            <h2 className="mb-3 text-xl font-bold text-skf-blue">Personuppgiftsansvarig</h2>
            <p>
              Svenska Kickboxningsförbundet (SKF) är personuppgiftsansvarig för behandlingen av personuppgifter
              på denna webbplats. Vid frågor är du välkommen att kontakta oss på{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-skf-blue underline hover:opacity-75">
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-skf-blue">Vilka uppgifter samlar vi in?</h2>
            <p className="mb-3">
              Vi samlar inte in personuppgifter om dig när du besöker webbplatsen, förutom i de fall du
              aktivt skickar in ett formulär eller kontaktar oss via e-post.
            </p>
            <p>
              Vid kontakt via e-post sparas de uppgifter du anger (t.ex. namn och e-postadress) enbart
              för att kunna besvara din förfrågan.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-skf-blue">Cookies</h2>
            <p className="mb-3">
              Webbplatsen använder ett begränsat antal cookies som är nödvändiga för att sidan ska
              fungera korrekt. Vi använder inga spårningscookies eller reklamcookies.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-gray-700">
              <li>
                <strong>Cookiesamtycke</strong> – Vi sparar ditt val om cookies lokalt i din webbläsare
                så att vi inte behöver fråga vid varje besök.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-skf-blue">Hur länge sparas uppgifterna?</h2>
            <p>
              Personuppgifter som lämnas via e-post sparas så länge det är nödvändigt för att hantera
              ärendet, och raderas därefter. Cookieinformation i din webbläsare tas bort när du rensar
              webbläsarens lokala lagring, eller automatiskt efter 12 månader.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-skf-blue">Dina rättigheter (GDPR)</h2>
            <p className="mb-3">
              Enligt dataskyddsförordningen (GDPR) har du rätt att:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-gray-700">
              <li>Begära tillgång till de personuppgifter vi har om dig</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering av dina uppgifter</li>
              <li>Invända mot behandlingen av dina uppgifter</li>
            </ul>
            <p className="mt-3">
              Kontakta oss på{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-skf-blue underline hover:opacity-75">
                {CONTACT.email}
              </a>{' '}
              för att utöva dina rättigheter. Du har även rätt att lämna klagomål till{' '}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skf-blue underline hover:opacity-75"
              >
                Integritetsskyddsmyndigheten (IMY)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-skf-blue">Kontakt</h2>
            <p>
              Har du frågor om hur vi hanterar dina personuppgifter? Hör av dig till{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-skf-blue underline hover:opacity-75">
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
