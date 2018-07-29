export default ({ message }) => (
  <aside className="error-message">>
    {message}
    <style jsx> {`
      aside.error-message {
        padding: 1.5em;
        font-size: 14px;
        color: white;
        background-color: red;
      }
    `}</style>
  </aside>
);
