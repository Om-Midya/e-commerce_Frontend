import React from 'react';
import { Box, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import data from "../../public/data.json";

interface Category {
    id: number;
    name: string;
    subCategories: SubCategory[];
}

interface SubCategory {
    id: number;
    name: string;
    nestedSubCategories: NestedSubCategory[];
}

interface NestedSubCategory {
    id: number;
    name: string;
}

export const Categories: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [nestedAnchorEl, setNestedAnchorEl] = React.useState<null | HTMLElement>(null);
    const [subCategories, setSubCategories] = React.useState<SubCategory[]>([]);
    const [nestedSubCategories, setNestedSubCategories] = React.useState<NestedSubCategory[]>([]);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const categories: Category[] = data.categories;

    const handleCategoryClick = (event: React.MouseEvent<HTMLElement>, subCategories: SubCategory[]) => {
        if (anchorEl === event.currentTarget) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
            setSubCategories(subCategories);
            setNestedAnchorEl(null);
        }
    };

    const handleSubCategoryClick = (event: React.MouseEvent<HTMLElement>, nestedSubCategories: NestedSubCategory[]) => {
        if (nestedAnchorEl === event.currentTarget) {
            setNestedAnchorEl(null);
        } else {
            setNestedAnchorEl(event.currentTarget);
            setNestedSubCategories(nestedSubCategories);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setNestedAnchorEl(null);
    };

    return (
        <Box
            display="flex"
            overflowX={isSmallScreen ? "auto" : "hidden"}
            bgcolor="whitesmoke"
            p={2}
            style={{
                position: 'absolute',
                top: '7%',
                left: 0,
                zIndex: 100,
                width: '100%',
                justifyContent: isSmallScreen ? 'flex-start' : 'space-around',
                alignItems: 'center',
            }}
        >
            {categories.map((category: Category) => (
                <Box key={category.id} mr={2} position="relative">
                    <Typography
                        onClick={(event) => handleCategoryClick(event, category.subCategories)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'black',
                        }}
                    >
                        {category.name}
                        <ArrowDropDownIcon />
                    </Typography>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {subCategories.map((subCategory: SubCategory) => (
                            <MenuItem
                                key={subCategory.id}
                                onClick={(event) => handleSubCategoryClick(event, subCategory.nestedSubCategories)}
                            >
                                {subCategory.name}

                                <Menu
                                    anchorEl={nestedAnchorEl}
                                    open={Boolean(nestedAnchorEl)}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                >
                                    {nestedSubCategories.map((nestedSubCategory: NestedSubCategory) => (
                                        <MenuItem key={nestedSubCategory.id}>
                                            {nestedSubCategory.name}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ))}
        </Box>
    );
}
