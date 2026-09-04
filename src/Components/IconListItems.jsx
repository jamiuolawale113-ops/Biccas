function IconListItem({ icon, title, description }) {
  const IconComponent = icon;

  return (
    <div className="icon-list-item">
      <div className="icon-list-item__icon-box">
        <IconComponent />
      </div>
      <div>
        <h3 className="icon-list-item__title">{title}</h3>
        <p className="icon-list-item__description">{description}</p>
      </div>
    </div>
  );
}

export default IconListItem;