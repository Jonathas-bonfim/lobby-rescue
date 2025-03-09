import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ItemProps } from '../../@types/data';
import theme from '../../styles/theme';
import { ItemContainer, SizeButton } from './styles';

const Item: React.FC<ItemProps> = ({
  customer_product_id,
  name,
  quantity,
  optional,
  image_url,
  sizes_grid,
  sizes,
}) => {
  console.log('JB | render item ', {
    customer_product_id,
    name,
    quantity,
    optional,
    image_url,
    sizes_grid,
    sizes,
  });
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (sizeId: string) => {
    setSelectedSize(sizeId);
  };

  return (
    <ItemContainer>
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
          {sizes.map((size) => (
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

          ))}
        </Box>
      )}
    </ItemContainer>
  );
};

export default Item;