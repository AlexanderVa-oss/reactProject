// CardComponent.jsx
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import React, { useContext } from 'react';
import LoginContext from "../store/loginContext";
import axios from "axios";
import { toast } from "react-toastify";

const CardComponent = ({
  title,
  subtitle,
  img,
  phone,
  address,
  cardNumber,
  userId,
  onDelete,
  id,
}) => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const isCardOwner = login?.id === !userId;

  const handleDeleteClick = async () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      // Обработка случая, когда пользователь не авторизован
      return;
    }

    try {
      const response = await axios.delete(`/cards/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        // Удаление карточки из состояния на клиенте, если это необходимо
        onDelete(id);
        toast.success("😎 Your card deleted", { /* options toast */ });
      }
    } catch (error) {
      console.error('Error on delete card ', error);
    }
  };

  const handleEditClick = () => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  const handleCardClick = () => {
    navigate(`${ROUTES.CARD}/${id}`);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://cdn.leonardo.ai/users/174b9e54-f96e-4369-950f-7eaad8384fa9/generations/8f9b2e2c-a01b-48b4-8bd4-80d1259f7942/Leonardo_Diffusion_XL_page_not_found_0.jpg';
  };

  const userLogin = login;
  const userBusiness = login?.isBusiness;
  const userAdmin = login?.isAdmin;


  return (
    <Card sx={{
      maxWidth: 275,
      width: 800,
      transition: 'transform 0.5s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
      },
    }}
      square raised>
      <CardActionArea>
        <CardMedia
          onClick={handleCardClick}
          component="img"
          image={img}
          onError={handleImageError}
          alt="Your Image"
          height={200} sx={{ objectFit: "cover" }}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:
          </Typography>
          {address.city}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>

          <Box>
            {(userAdmin || isCardOwner) && (
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            )}

            {(userAdmin || isCardOwner) && (
              <IconButton onClick={handleEditClick}>
                <ModeIcon />
              </IconButton>
            )}
          </Box>

          <Box>
            <IconButton>
              <LocalPhoneIcon />
            </IconButton>

            {(userAdmin || userBusiness || userLogin) && (
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  cardNumber: PropTypes.number.isRequired,
};

CardComponent.defaultProps = {
  img: "https://cdn.leonardo.ai/users/174b9e54-f96e-4369-950f-7eaad8384fa9/generations/8f9b2e2c-a01b-48b4-8bd4-80d1259f7942/Leonardo_Diffusion_XL_page_not_found_0.jpg",
  subtitle: "subtitle default",
  phone: " 050-000-00-00",
  address: {
    city: " City",
    street: "Street",
    houseNumber: 99
  },
  cardNumber: 9999,
};

export default CardComponent;
