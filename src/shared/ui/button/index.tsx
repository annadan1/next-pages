import NextLink from 'next/link';
import cn from 'classnames';
import styles from './button.module.scss';

type TButton = {
  /** Ссылка */
  href?: string,
  /** Коллбак при клике на кнопку */
  onClick?: React.MouseEventHandler<HTMLElement>,
  /** Флаг отключения кнопки */
  disabled?: boolean,
  /** Поведение при клике на ссылку */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'],
  /** Тип кнопки submit, по умолчанию false */
  submit?: boolean,
  withIcon?: boolean
};

export const Button: FCClass<TButton> = ({
  children, className, href, onClick, disabled, target, withIcon = false, submit = false,
}) => {
  const elementClass = cn(
    className,
    styles.button,
    { [styles.withIcon]: withIcon },
    't1',
  );

  if (href) {
    return (
      <NextLink
        href={href}
        className={elementClass}
        target={target}
      >
        {children}
      </NextLink>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      className={elementClass}
    >
      {children}
    </button>
  );
};
