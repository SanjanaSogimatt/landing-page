import "./index.css";
export const Card = ({header, backgroundColor}) => {
  return (
    <div>
    <div class="card" style={{ backgroundColor }}>
      <div class="card_info">
        <h2>{header}</h2>
      </div>
    </div>
    </div>

  )
}