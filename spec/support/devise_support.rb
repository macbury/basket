# Helpers for sign in and sign out
module DeviseSupport
  # Helper methods for controller tests
  module Controller
    # Login as user
    # @param [Symbol] name of factory to use
    def login_as(user_factory=:user)
      let!(:current_user) { FactoryGirl.create(user_factory) }
      before(:each) do
        @request.env["devise.mapping"] = Devise.mappings[:user]
        sign_in(current_user)
      end
    end

    # Ensure requests are done by guest
    def as_guest
      before(:each) do
        sign_out(:user)
      end
    end
  end

  module Feature
    # Creates current_user with passed argumens
    def as_user(*args)
      let(:current_user) { FactoryGirl.create(*args) }
      before(:each) do
        login_as(current_user, scope: :user, run_callbacks: false)
      end
    end

    # Logouts current user
    def as_guest
      before(:each) do
        logout(:user)
      end
    end
  end
end
