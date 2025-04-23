export default function FeatureItem({img, title, description}) {
  return (
    <div className="feature-item">
      <img src={img} alt={img} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}
      </p>
    </div>
  );
}
