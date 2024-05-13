package com.trip.vue.board.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.trip.vue.board.model.BoardDto;

@Service
public class BoardServiceImpl implements BoardService{

	@Override
	public List<BoardDto> listBoard() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertBoard(BoardDto ob) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteBoard(int board_id) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int modifyBoard(BoardDto ob) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public BoardDto viewBoard(int board_id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateHit(int board_id) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<BoardDto> searchBoard(Map<String, String> keyword) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
