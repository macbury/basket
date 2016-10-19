# Simple support for better testing using rspec
module ScreenshotSupport
  RSPEC_FAILURE = Rails.root.join('tmp/capybara/failures')
  RSPEC_SUCCESS = Rails.root.join('tmp/capybara/success')

  # Use this to clean screen dir on start
  def self.clean!
    FileUtils.rm_rf(RSPEC_FAILURE)
    FileUtils.rm_rf(RSPEC_SUCCESS)
    FileUtils.mkdir_p(RSPEC_FAILURE)
    FileUtils.mkdir_p(RSPEC_SUCCESS)
  end

  # Take a failure rspec screenshoot
  def self.failure!(page, example)
    self.take!(page, example, RSPEC_FAILURE)
  end

  # Take a success rspec screenshoot
  def self.success!(page, example)
    self.take!(page, example, RSPEC_SUCCESS)
  end

  def self.take!(page, example, storage)
    meta            = example.metadata
    filename        = File.basename(meta[:file_path])
    line_number     = meta[:line_number]
    screenshot_name = "#{filename}-#{line_number}.png"
    screenshot_path = File.join(storage, screenshot_name)

    page.save_screenshot(screenshot_path, { full: true })
  end

  # Takes screenshot and places it under tmp/rspec/debug.png
  def screenshot!
    page.save_screenshot(Rails.root.join('tmp/rspec/debug.png'), { full: true })
    File.open(Rails.root.join('tmp/rspec/page.html'), 'w') do |f|
      f.write(page.body)
    end
  end

end
