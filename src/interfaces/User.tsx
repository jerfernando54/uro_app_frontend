export interface UserResponse {
  message:   string;
  user: User;
}

export interface User {
  id:            number,
	email:         string,
	username:      string,
	first_name:    string,
	last_name:     string,
	password:      string,
	dni:           string,
	role:          string,
	is_active:     boolean
}