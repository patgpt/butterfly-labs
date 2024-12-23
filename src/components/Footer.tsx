import { PrismicRichText } from "@/components/PrismicRichText";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";

async function Footer() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer").catch(() => null);

  if (!footer) return null;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          {isFilled.image(footer.data.footer_logo) && (
            <div className="flex justify-center md:justify-start">
              <PrismicNextImage
                field={footer.data.footer_logo}
                className="h-8"
              />
            </div>
          )}

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:justify-end"></ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
          <PrismicRichText field={footer.data.copyright_text} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
