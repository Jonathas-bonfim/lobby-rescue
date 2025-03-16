import { Box, Button, Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ItemRedeemCreationProps } from '../../@types/redeemForm';
import { RedeemPageProps } from '../../@types/reedemPages';
import { getRedeemPage } from '../../api/api';
import Item from '../Item';

const Items: React.FC = () => {
  const { data: redeemPageProps = { items: [] } } = useQuery<RedeemPageProps>({
    queryKey: ['redeemPages'],
    queryFn: getRedeemPage,
  });

  const { setValue, watch } = useFormContext();
  const selectedItems = watch('selectedItems', []);

  const [selectedSizes, setSelectedSizes] = useState<{ [itemId: string]: string }>({});
  const [tempSelectedItems, setTempSelectedItems] = useState<ItemRedeemCreationProps[]>(selectedItems);

  const handleSizeSelect = useCallback((itemId: string, sizeId: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: sizeId }));
  }, []);

  const handleItemSelect = useCallback(
    (itemId: string, isSelected: boolean) => {
      const hasSizes =
        redeemPageProps?.items?.find((item) => item.customer_product_id === itemId)?.sizes?.length ?? 0 > 0;

      const isSizeSelected = !!selectedSizes[itemId];

      if (isSelected && (!hasSizes || isSizeSelected)) {
        const newItem: ItemRedeemCreationProps = {
          customer_product_id: itemId,
          size_name: selectedSizes[itemId] || '',
        };
        setTempSelectedItems((prev) => [...prev, newItem]);
      } else if (!isSelected) {
        setTempSelectedItems((prev) =>
          prev.filter((item) => item.customer_product_id !== itemId)
        );
      }
    },
    [selectedSizes, redeemPageProps]
  );

  const handleConfirmSelection = useCallback(() => {
    setValue('selectedItems', tempSelectedItems);
    console.log('Itens selecionados:', tempSelectedItems, redeemPageProps);
  }, [tempSelectedItems, setValue, redeemPageProps]);

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
          justifyContent: 'center',
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
        {redeemPageProps?.items.map((item) => (
          <Item
            key={item.customer_product_id}
            {...item}
            isSelected={
              !item.optional || tempSelectedItems.some((selectedItem) => selectedItem.customer_product_id === item.customer_product_id)
            }
            isSizeSelected={!!selectedSizes[item.customer_product_id]}
            onItemSelect={
              item.optional
                ? (isSelected) => handleItemSelect(item.customer_product_id, isSelected)
                : undefined
            }
            onSizeSelect={(sizeId) =>
              handleSizeSelect(item.customer_product_id, sizeId)
            }
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button variant="contained" color="primary" onClick={handleConfirmSelection}>
          Confirmar Seleção
        </Button>
      </Box>
    </Container>
  );
};

export default Items;