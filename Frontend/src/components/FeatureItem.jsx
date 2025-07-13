export default function FeatureItem({ img, alt, title, description }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" loading="lazy"/>
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
