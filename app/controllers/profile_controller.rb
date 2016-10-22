# Resource with current logged in user
class ProfileController < ApiController
  def me
    render json: { email: current_user.email, id: current_user.id }
  end
end
