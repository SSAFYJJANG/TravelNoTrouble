package com.trip.vue.board.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.trip.vue.board.model.BoardDto;

@Mapper
public interface BoardDao {
	//list 가져오기 (return list<BoardDto> / params())
	public List<BoardDto> listBoard() throws Exception;
	//글 쓰기
	public int insertBoard(BoardDto ob) throws Exception;
	//글 삭제
	public int deleteBoard(int board_id) throws Exception;
	//글 수정
	public int modifyBoard(BoardDto ob) throws Exception;
	//글 세부사항 가져오기
	public BoardDto viewBoard(int board_id) throws Exception;
	//조회수 올리기
	public void updateHit(int board_id) throws Exception;
	//글 검색하기(글제목, 작성자)
	public List<BoardDto> searchBoard(Map<String, String> keyword) throws Exception;
	// 사용자 전체 글 삭제
	public int deleteAllBoard(String userId) throws Exception;
}
