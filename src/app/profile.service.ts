import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Danielle',
    contact: '734-734-7345',
    bio: 'I like eggs',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = (userProfile: UserProfile) => {
    this.userProfile = userProfile;
  };
}
