import { Box, Checkbox, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { ItemRedeemPageProps } from '../../@types/reedemPages';
import checkedIcon from '../../assets/icons/checkbox-checked.svg';
import uncheckedIcon from '../../assets/icons/checkbox-unchecked.svg';
import theme from '../../styles/theme';
import { ItemContainer, SizeButton } from './styles';

interface ItemProps extends ItemRedeemPageProps {
  isSelected: boolean;
  isSizeSelected?: boolean;
  onItemSelect?: (isSelected: boolean) => void;
  onSizeSelect?: (sizeId: string) => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  optional,
  image_url,
  sizes,
  isSelected,
  isSizeSelected,
  onItemSelect,
  onSizeSelect,
}) => {
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  const handleSizeSelect = (sizeId: string) => {
    setSelectedSize(sizeId);
    if (onSizeSelect) {
      onSizeSelect(sizeId);
    }
  };

  const handleCheckboxChange = () => {
    if (onItemSelect) {
      onItemSelect(!isSelected);
    }
  };


  const isCheckboxDisabled = sizes?.length > 0 && !isSizeSelected;

  return (
    <ItemContainer>
      {optional && (
        <Tooltip
          title={isCheckboxDisabled ? "Selecione um tamanho antes" : ""}
          placement="top"
        >
          <span style={{ display: 'inline-block' }}>
            <Checkbox
              checked={isSelected}
              onChange={handleCheckboxChange}
              icon={<img src={uncheckedIcon} alt="Unchecked" />}
              checkedIcon={<img src={checkedIcon} alt="Checked" />}
              disabled={isCheckboxDisabled}
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
          </span>
        </Tooltip>
      )}

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

      {sizes?.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          {sizes.map((size) =>
            size?.id?.length && size?.name?.length ? (
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