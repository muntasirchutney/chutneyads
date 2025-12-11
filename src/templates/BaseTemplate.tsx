import { useTranslations } from 'next-intl';

export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div >
      {props.children}
    </div>
  );
};
