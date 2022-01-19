require "test_helper"

class ResourcesControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get resources_search_url
    assert_response :success
  end

  test "should get create" do
    get resources_create_url
    assert_response :success
  end
end
