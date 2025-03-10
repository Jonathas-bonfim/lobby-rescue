import { Box, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ItemProps } from '../../@types/data';
import theme from '../../styles/theme';
import { ItemContainer, SizeButton } from './styles';

import checkedIcon from '../../assets/icons/checkbox-checked.svg';
import uncheckedIcon from '../../assets/icons/checkbox-unchecked.svg';

const Item: React.FC<ItemProps> = ({
  customer_product_id,
  name,
  quantity,
  optional,
  image_url,
  sizes_grid,
  sizes,
}) => {

  console.log('JB | Item ', {
    customer_product_id,
    name,
    quantity,
    optional,
    image_url,
    sizes_grid,
  });

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSizeSelect = (sizeId: string) => {
    setSelectedSize(sizeId);
  };

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };

  return (
    <ItemContainer>
      <Checkbox
        checked={isSelected}
        onChange={handleCheckboxChange}
        icon={<img src={uncheckedIcon} alt="Unchecked" />}
        checkedIcon={<img src={checkedIcon} alt="Checked" />}
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 1,
          padding: 0,
          '& .MuiSvgIcon-root': {
            width: '2rem',
            height: '2rem',
          },
        }}
      />

      <Box
        component="img"
        src={image_url}
        alt={name}
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
        }}
      />

      <Typography
        variant="h6"
        sx={{
          fontSize: '1rem',
          fontWeight: 600,
          lineHeight: '100%',
          letterSpacing: '0%',
          marginBottom: '0.75rem',
          color: theme.palette.custom.black,
        }}
      >
        {name}
      </Typography>

      {sizes.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          {sizes.map((size) =>
            size.id.length && size?.name?.length ? (
              <SizeButton
                key={size.id}
                selected={selectedSize === size.id}
                onClick={() => handleSizeSelect(size.id)}
              >
                {size.name}
              </SizeButton>
            ) : (
              <></>
            )
          )}
        </Box>
      )}
    </ItemContainer>
  );
};

export default Item;