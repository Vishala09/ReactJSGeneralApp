import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './SideBar.css'

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));


function StyledTreeItem(props) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const styleProps = {
    '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
    '--tree-view-bg-color':
      theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.5,
            pr: 0,
          }}
        >
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={styleProps}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  bgColorForDarkMode: PropTypes.string,
  color: PropTypes.string,
  colorForDarkMode: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};


const menuItems = [
{item:'Section 1',icon:MailIcon,children:[{item:'Section 1 Sub Menu 1',icon:InfoIcon},{item:'Section 1 Sub Menu 2',icon:Label},{item:'Section 1 Sub Menu 3',icon:ForumIcon}]},
{item:'Section 2',icon:DeleteIcon,children:[{item:'Section 2 Sub Menu 1',icon:InfoIcon},{item:'Section 2 Sub Menu 2',icon:Label},{item:'Section 2 Sub Menu 3',icon:ForumIcon}]},
{item:'Section 3',icon:Label,children:[{item:'Section 3 Sub Menu 1',icon:InfoIcon},{item:'Section 3 Sub Menu 2',icon:Label},{item:'Section 3 Sub Menu 3',icon:ForumIcon}]},
{item:'Section 4',icon:InfoIcon,children:[{item:'Section 4 Sub Menu 1',icon:InfoIcon},{item:'Section 4 Sub Menu 2',icon:Label},{item:'Section 4 Sub Menu 3',icon:ForumIcon}]},
{item:'Section 5',icon:SupervisorAccountIcon,children:[{item:'Section 5 Sub Menu 1',icon:InfoIcon},{item:'Section 5 Sub Menu 2',icon:Label},{item:'Section 5 Sub Menu 3',icon:ForumIcon}]}];


export default function CustomTreeView() {
    const menuIcons = [MailIcon]
  return (
    <div className='SideBar'>
    <TreeView
      aria-label="gmail"
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      sx={{  }}
    >
        {
            menuItems.map((menuitem)=>
                <>
                    <StyledTreeItem key={menuitem.item} nodeId={menuitem.item} labelText={menuitem.item} labelIcon={menuitem.icon}>
                    {
                        menuitem.children.map((submenuitem)=>
                        <>
                               <StyledTreeItem
                                    key={submenuitem.item} nodeId={submenuitem.item}
                                    labelText={submenuitem.item}
                                    labelIcon={submenuitem.icon}
                                    labelInfo=""
                                    color="#1a73e8"
                                    bgColor="#e8f0fe"
                                    colorForDarkMode="#B8E7FB"
                                    bgColorForDarkMode="#071318"
                                    /> 
                        </>
                        )
                    }
                    </StyledTreeItem>
                </>
            )
        }
      
     
    </TreeView>
    </div>
  );
}
