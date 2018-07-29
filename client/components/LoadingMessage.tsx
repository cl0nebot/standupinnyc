export default ({ message }) => (
  <aside class="loading">
    {message}
    <style jsx>{`
      aside {
        padding: 1.5em;
        font-size: 14px;
      }
    `}</style>
  </aside>
);
