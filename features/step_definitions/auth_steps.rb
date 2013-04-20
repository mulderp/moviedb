When(/^I am on the homepage$/) do
  visit '/'
end

When(/^I signup$/) do
  click_link 'Signup'
end

Then(/^I am on the dashboard$/) do
  pasge.should include('dashboard')
end
