package com.trip.vue.board.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.vue.board.model.BoardDto;
import com.trip.vue.board.model.dao.BoardDao;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardDao boardDao;

	@Override
	public List<BoardDto> listBoard() throws Exception {
		return boardDao.listBoard();
	}

	@Transactional
	@Override
	public int insertBoard(BoardDto ob) throws Exception {
		return boardDao.insertBoard(ob);
	}

	@Transactional
	@Override
	public int deleteBoard(int board_id) throws Exception {
		return boardDao.deleteBoard(board_id);
	}

	@Transactional
	@Override
	public int modifyBoard(BoardDto ob) throws Exception {
		return boardDao.modifyBoard(ob);
	}

	@Override
	public BoardDto viewBoard(int board_id) throws Exception {
		updateHit(board_id);
		return boardDao.viewBoard(board_id);
	}

	@Transactional
	@Override
	public void updateHit(int board_id) throws Exception {
		boardDao.updateHit(board_id);
	}

	@Override
	public List<BoardDto> searchBoard(Map<String, String> keyword) throws Exception {
		return boardDao.searchBoard(keyword);
	}

}
