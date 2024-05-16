package com.trip.vue.hotplace.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.vue.hotplace.model.HotplaceDto;
import com.trip.vue.hotplace.model.dao.HotplaceDao;

@Service
public class HotplaceServiceImpl implements HotplaceService {

	@Autowired
	private HotplaceDao hotplaceDao;

	@Override
	public List<HotplaceDto> listBestHotplace() throws Exception {
		return hotplaceDao.listBestHotplace();
	}

	@Override
	public List<HotplaceDto> listHotplace() throws Exception {
		return hotplaceDao.listHotplace();
	}

	@Transactional
	@Override
	public int insertHotplace(HotplaceDto ob) throws Exception {
		return hotplaceDao.insertHotplace(ob);
	}

	@Transactional
	@Override
	public int deleteHotplace(int hotplace_id) throws Exception {
		return hotplaceDao.deleteHotplace(hotplace_id);
	}

	@Transactional
	@Override
	public int modifyHotplace(HotplaceDto ob) throws Exception {
		return hotplaceDao.modifyHotplace(ob);
	}

	@Override
	public HotplaceDto viewHotplace(int hotplace_id) throws Exception {
		return hotplaceDao.viewHotplace(hotplace_id);
	}

	@Transactional
	@Override
	public void updateLike(int hotplace_id) throws Exception {
		hotplaceDao.updateLike(hotplace_id);
	}

	@Override
	public int getTotalHotplaceCount() throws Exception {
		return hotplaceDao.getTotalHotplaceCount();
	}
	
	@Transactional
	@Override
	public int deleteAllHotplace(String userId) throws Exception {
		return hotplaceDao.deleteAllHotplace(userId);
	}

	@Override
	public int viewUserHotplace(String userId) throws Exception {
		return hotplaceDao.viewUserHotplace(userId);
	}

}
