require 'test_helper'

class ProfilePagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get profile_pages_index_url
    assert_response :success
  end

end
