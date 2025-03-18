import { Box, Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ItemRedeemCreationProps } from '../../../@types/redeemForm';
import { RedeemPageProps } from '../../../@types/reedemPages';
import { ESteps } from '../../../@types/steps';
import { getRedeemPage } from '../../../api/api';
import NavigationButtons from '../../Buttons/NavigationButtons';
import Item from '../../Item';
import { useSnackbar } from '../../Snackbar';

interface ItemsProps {
  navigateToStep: (step: ESteps) => void;
}

const Items: React.FC<ItemsProps> = ({ navigateToStep }) => {
  const { data: redeemPageProps = { items: [] } } = useQuery<RedeemPageProps>({
    queryKey: ['redeemPages'],
    queryFn: getRedeemPage,
  });

  const { setValue } = useFormContext();
  const { showSnackbar } = useSnackbar();

  const [selectedSizes, setSelectedSizes] = useState<{ [itemId: string]: string }>({});
  const [tempSelectedItems, setTempSelectedItems] = useState<ItemRedeemCreationProps[]>([]);

  useEffect(() => {
    const requiredItems = redeemPageProps.items
      .filter((item) => !item.optional)
      .map((item) => ({
        customer_product_id: item.customer_product_id,
        size_name: '',
      }));

    setTempSelectedItems(requiredItems);
  }, [redeemPageProps.items]);

  const handleSizeSelect = useCallback((itemId: string, sizeId: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: sizeId }));

    setTempSelectedItems((prev) =>
      prev.map((item) =>
        item.customer_product_id === itemId ? { ...item, size_name: sizeId } : item
      )
    );
  }, []);

  const handleItemSelect = useCallback(
    (itemId: string, isSelected: boolean) => {
      const item = redeemPageProps.items.find((item) => item.customer_product_id === itemId);

      if (!item?.optional && !isSelected) {
        return;
      }

      if (isSelected) {
        const newItem: ItemRedeemCreationProps = {
          customer_product_id: itemId,
          size_name: selectedSizes[itemId] || '',
        };
        setTempSelectedItems((prev) => [...prev, newItem]);
      } else {
        setTempSelectedItems((prev) =>
          prev.filter((item) => item.customer_product_id !== itemId)
        );
      }
    },
    [redeemPageProps.items, selectedSizes]
  );

  const handleConfirmSelection = useCallback(() => {
    const requiredItems = redeemPageProps.items.filter((item) => !item.optional);
    const itemsWithMissingSizes = requiredItems.filter((item) => {
      const selectedItem = tempSelectedItems.find(
        (selected) => selected.customer_product_id === item.customer_product_id
      );
      return item.sizes?.length > 0 && !selectedItem?.size_name;
    });

    if (itemsWithMissingSizes.length > 0) {
      showSnackbar('Por favor, selecione um tamanho para todos os itens obrigatórios que exigem tamanho.', 'warning');
      return;
    }

    const optionalItems = redeemPageProps.items.filter((item) => item.optional);
    const hasSelectedOptionalItem = optionalItems.some((item) =>
      tempSelectedItems.some((selected) => selected.customer_product_id === item.customer_product_id)
    );

    if (!hasSelectedOptionalItem) {
      showSnackbar('Selecione pelo menos 1 item opcional para continuar.', 'warning');
      return;
    }

    setValue('items', tempSelectedItems);
    navigateToStep(ESteps.DELIVERY_RECIPIENT);
  }, [tempSelectedItems, setValue, navigateToStep, redeemPageProps.items, showSnackbar]);

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
          marginBottom: '2.5rem',
        }}
      >
        {redeemPageProps.items.map((item) => (
          <Item
            key={item.customer_product_id}
            {...item}
            isSelected={tempSelectedItems.some(
              (selectedItem) => selectedItem.customer_product_id === item.customer_product_id
            )}
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

      <NavigationButtons
        handleNextStep={handleConfirmSelection}
        handlePrevStep={() => navigateToStep(ESteps.WELCOME)}
      />
    </Container>
  );
};

export default Items;