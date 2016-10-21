require 'rails_helper'

feature 'Signing in' do
  context 'as guest' do
    as_guest
    scenario 'visiting / should redirect to /sign_in' do
      visit '/'
      expect(page).to have_content('Sign in')
      expect(page).to have_content('You need to sign in or sign up before continuing.')
    end

    scenario 'with valid email and password' do
      user = create(:user)
      visit '/sign_in'

      expect(page).to have_content('Sign in')

      fill_in 'E-Mail', with: user.email
      fill_in 'Password', with: 'admin1234'
      click_on 'Sign in'
      binding.pry
      expect(page).to have_content 'Signed in successfully'
    end

    scenario 'with invalid email or password' do
      visit '/sign_in'
      click_on 'Sign in'

      expect(page).to have_content 'Invalid email or password.'
    end
  end
end
