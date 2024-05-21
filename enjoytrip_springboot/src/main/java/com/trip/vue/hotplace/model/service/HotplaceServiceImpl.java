package com.trip.vue.hotplace.model.service;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

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
	public int insertHotplace(HotplaceDto ob, MultipartFile file) throws Exception {
		final String extension = file.getContentType().split("/")[1];
		final String fileName = UUID.randomUUID() + "." + extension;
				
		Path uploadPath = Paths.get("uploadimg/" + ob.getUserId());
		if (!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath);
			System.out.println("make dir : " + uploadPath.toString());
		}
		
		try (InputStream inputStream = file.getInputStream()) {
			Path filePath = uploadPath.resolve(fileName);
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
			ob.setImage(filePath.toString());
		} catch (Exception e) {
			throw new Exception("Could not save image file: " + fileName, e);
		}
		
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
	
	// user 탈퇴
	@Override
	public int deleteAllHotplace(String userId) throws Exception {
		return hotplaceDao.deleteAllHotplace(userId);
	}

	@Override
	public int viewUserHotplace(String userId) throws Exception {
		return hotplaceDao.viewUserHotplace(userId);
	}

}
