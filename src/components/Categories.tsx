import React from 'react';
import {Box, Menu, MenuItem} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import data from "../../public/data.json";
import {NestedMenuItem} from "mui-nested-menu";

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
    const [subCategories, setSubCategories] = React.useState<SubCategory[]>([]);



    const categories: Category[] = data.categories;

    const handleCategoryClick = (event: React.MouseEvent<HTMLElement>, subCategories: SubCategory[]) => {
        if (anchorEl === event.currentTarget) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
            setSubCategories(subCategories);
        }
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '4% 2%',
                backgroundColor: 'white',
                padding: '0.5%',
            }}
        >
            {categories.map((category) => (
                <Box key={category.id} style={{
                    margin: '0',
                }}>
                    <MenuItem
                        onMouseOver={(event) => handleCategoryClick(event, category.subCategories)}
                        style={{
                            cursor: 'pointer',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >

                    {category.name}
                    <ArrowDropDownIcon />

                    </MenuItem>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        MenuListProps={{
                            onMouseLeave: handleClose,
                        }}
                    >
                        {subCategories.map((subCategory) => (
                            <NestedMenuItem
                                key={subCategory.id}
                                label={subCategory.name}
                                parentMenuOpen={Boolean(anchorEl)}
                            >
                                {subCategory.nestedSubCategories.map((nestedSubCategory) => (
                                    <MenuItem key={nestedSubCategory.id} onClick={handleClose}>
                                        {nestedSubCategory.name}
                                    </MenuItem>
                                ))}
                            </NestedMenuItem>
                        ))}
                    </Menu>
                </Box>
            ))}
        </Box>
    );
}
