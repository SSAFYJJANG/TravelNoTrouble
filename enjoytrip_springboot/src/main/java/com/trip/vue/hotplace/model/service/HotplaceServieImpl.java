package com.trip.vue.hotplace.model.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.trip.vue.hotplace.model.HotplaceDto;

@Service
public class HotplaceServieImpl implements HotplaceServie{

	@Override
	public List<HotplaceDto> listBestHotplace() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<HotplaceDto> listHotplace() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertHotplace(HotplaceDto ob) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteHotplace(int hotplace_id) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int modifyHotplace(HotplaceDto ob) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public HotplaceDto viewHotplace(int board_id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateHit(int hotplace_id) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateLike(int hotplace_id) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int getTotalHotplaceCount() throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

}
