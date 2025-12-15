import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const AVAILABLE_SLUGS = new Set(Array.from({ length: 6 }, (_, index) => `${index}`));

type IPortfolioDetailProps = {
  params: Promise<{ slug: string }>;
};

function validateSlug(slug: string) {
  if (!AVAILABLE_SLUGS.has(slug)) {
    notFound();
  }
}

export async function generateMetadata(props: IPortfolioDetailProps): Promise<Metadata> {
  const { slug } = await props.params;
  validateSlug(slug);

  return {
    title: `Portfolio ${slug}`,
    description: `Portfolio ${slug} description`,
  };
}

export default async function PortfolioDetail(props: IPortfolioDetailProps) {
  const { slug } = await props.params;
  validateSlug(slug);

  return (
    <>
      <h1 className="capitalize">{`Portfolio ${slug}`}</h1>
      <p>Created a set of promotional materials and branding elements for a corporate event.</p>
    </>
  );
};
