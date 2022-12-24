// Um componente react é uma classe que retorna o método render
// Retornar componente de classe ou de função
export const PostCard = ({ title, cover, body, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
