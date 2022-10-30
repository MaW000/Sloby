import { Menu } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../../../Others/Context/ContentContext';
import {
  SlobyDashboard,
  SlobyMenuContainer,
  ViewItem,
  UserDetails,
  SlobyImage,
  FavoriteContainer,
  UserName,
  MainMenus,
  MenuItem,
  ViewsContainer,
  SlobyMenuCategoryTitle,
  FavoriteProject,
} from '../../styles/Dashboard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/redux';
import { setSearchbar } from '../../store/redux/dashboard/dashboardSlice';
import { mainMenus, views } from '../../store/temporaryAPI';
import { AiTwotoneFolder } from 'react-icons/ai';
import { IEventType } from '../../types';

function SlobyMenu() {
    const { sloby_dashboard } = useContext(ContentContext);
    const dispatch = useDispatch<AppDispatch>();
    const [value, setValues] = useState(false)
        
        
    const handleClick = (e: any) => {
        console.log(e.target.id);
        if (e.target.id !== 'Search') return;
        dispatch(setSearchbar(true));
    };

    
    
  return (
    <SlobyMenuContainer>
      <UserDetails>
        <SlobyImage src="https://content.invisioncic.com/a319035/monthly_2016_11/avatar.thumb.png.c68c113d40702f1cbaf0ff7fbb57ee46.png"></SlobyImage>
        <UserName>Gabor Hadhazy's dashboard</UserName>
      </UserDetails>
      <div className="underline"></div>
      <MainMenus>
        {mainMenus.map((item: any) => {
          return (
            <MenuItem
              key={item.id}
              id={item.title}
              onClick={(e: any) => handleClick(e)}
            >
              {item.icon}
              {item.title}
            </MenuItem>
          );
        })}
      </MainMenus>
      <ViewsContainer>
        <SlobyMenuCategoryTitle>Views</SlobyMenuCategoryTitle>
        {views.map((item: any) => {
          return (
            <ViewItem key={item.id}>
              {item.icon}
              {item.title}
            </ViewItem>
          );
        })}
      </ViewsContainer>
      <FavoriteContainer>
        <FavoriteContainer>
          <SlobyMenuCategoryTitle>Favorite</SlobyMenuCategoryTitle>
          <FavoriteProject>
            <AiTwotoneFolder className="icon" />
            ProjectName
          </FavoriteProject>
        </FavoriteContainer>
      </FavoriteContainer>
    </SlobyMenuContainer>
  );
}

export default SlobyMenu;