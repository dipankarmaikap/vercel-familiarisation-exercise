export default function Accordion({ title, children }) {
  return (
    <details>
      <summary>{title}</summary>
      {children}
    </details>
  );
}
