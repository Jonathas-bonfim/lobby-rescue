import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { dataAPI } from '../../utils/Mock/dataApi';
import Item from '../Item';

const Items: React.FC = () => {

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          fontSize: '1.25rem',
          fontWeight: 600,
          lineHeight: '100%',
          textAlign: 'center',
          marginBlock: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Escolha o seu presente! 🎁
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {dataAPI.items.map((item) => (
          <Item key={item.customer_product_id} {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default Items;