import {
  S_CardProductAmazonContainer,
  S_DescriptionBox,
  S_ImgBox,
} from "../styles/CardProductAmazon.style";

const CardProductAmazon = ({ name, price, image_url, link }) => {
  return (
    <S_CardProductAmazonContainer>
      <S_ImgBox>
        <img src={`${image_url}` || ""} alt="foto não encontrada" />
      </S_ImgBox>

      <S_DescriptionBox>
        <p>R$ {price}</p>

        <div>
          <p>{name}</p>

          <a href={link} target="_blank">
            <p
              style={{
                cursor: "pointer",
                margin: "0",
                padding: "0",
                fontSize: "12px",
                fontWeight: "800",
                textDecoration: "underline",
              }}
            >
              Ver Produto
            </p>
          </a>
        </div>
      </S_DescriptionBox>
    </S_CardProductAmazonContainer>
  );
};

export default CardProductAmazon;
