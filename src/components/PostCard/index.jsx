// Um componente react é uma classe que retorna o método render
// Retornar componente de classe ou de função
export const PostCard = ({ title, cover, body, id }) => {
  return (
    <div key={id} className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
