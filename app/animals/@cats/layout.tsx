import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function CatsLayout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ flex: 3, padding: 24 }}>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Google</li>
          <li>Tictok</li>
        </ul>
      </nav>
      <div style={{ flex: 7 }}>{children}</div>
    </div>
  );
}
