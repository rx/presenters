module Support
  module JSErrors
    def print_js_errors
      log = @browser.driver.manage.logs.get(:browser)
      errors = log.select {|entry| entry.level.eql? 'SEVERE'}
      if errors.count > 0
        javascript_errors = errors.map(&:message).join("\n")
        raise javascript_errors
      end
    end
  end
end