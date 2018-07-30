export default ({ message }) => (
  <aside className="loading-message">>
    {message}
    <style jsx>{`
      aside.loading-message {
        padding: 1.5em;
        font-size: 14px;
      }
    `}</style>
  </aside>
);
