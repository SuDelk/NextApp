"use client";

type ButtonProps = {
  title?: string;
};

export default function ButtonComponent({ title }: Readonly<ButtonProps>) {
  return (
    <button
      onClick={() => {
        alert(title ?? "Button clicked!");
      }}
    >
      Click
    </button>
  );
}