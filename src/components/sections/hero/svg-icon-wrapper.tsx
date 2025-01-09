import clsx from 'clsx';
import React, { type PropsWithChildren } from 'react';

interface SvgIconProps extends React.SVGProps<SVGElement> {
  size?: number | string;
}

function ToolTip({ children }: PropsWithChildren) {
  return (
    <span
      role='tooltip'
      className={clsx(
        'group-hover:opacity-100 opacity-0 transition-opacity ',
        '-left-1/2 absolute px-1 mt-1',
        'text-sm text-white bg-gray-600 rounded-md whitespace-nowrap '
      )}
    >
      {children}
    </span>
  );
}

export function SvgIconWrapper({ children, size }: React.PropsWithChildren<SvgIconProps>) {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<SvgIconProps>(child)) {
          const nameFromProps = child.props.name ?? '';
          return (
            <div
              className={clsx(
                'group relative cursor-pointer'
                //   below works but has centering x-axis problem
                // 'before:inline-block before:absolute before:content-[attr(data-tip)] before:bg-white,',
                // 'before:-translate-x-1/2',
                // 'hover:before:bg-white text-xs',
                // 'before:opacity-0 hover:before:opacity-100 whitespace-nowrap'
              )}
              data-tip={nameFromProps}
            >
              {React.cloneElement(child, {
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key: `svg-icon-${index}`,
                'aria-label': nameFromProps,
                role: 'img',

                className: "before:block before:content-[attr(data-tip)] before:content-['dd']",
                size,
              })}
              <ToolTip>{nameFromProps}</ToolTip>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
