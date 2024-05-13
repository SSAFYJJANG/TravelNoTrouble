package com.trip.vue.board.model;

import lombok.Data;

@Data
public class BoardDto {
	private int board_id;
    private String title;
    private String userId;
    private String overview;
    private String regist_time;
    private String modified_time;
    private int hit;
}
