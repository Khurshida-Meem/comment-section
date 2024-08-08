export interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Reply {
  id: number;
  commentHeaderId: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: CurrentUser;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: CurrentUser;
  replies: Reply[];
}

export interface MainData {
  currentUser: CurrentUser;
  comments: Comment[];
}
