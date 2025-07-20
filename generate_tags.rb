# generate_tags.rb
require 'fileutils'

TAGS_DIR = 'tag'

FileUtils.mkdir_p(TAGS_DIR)

tags = Dir.glob("_posts/**/*md").flat_map do |file|
  File.read(file).scan(/tags: \[(.*?)\]/).flatten.map { |t| t.strip.split(',') }.flatten
end.uniq

tags.each do |tag|
  filename = "#{TAGS_DIR}/#{tag.strip.downcase.gsub(' ', '-')}.md"
  File.write(filename, <<~HEREDOC)
    ---
    layout: tag
    tag: #{tag.strip}
    permalink: /tag/#{tag.strip.downcase.gsub(' ', '-')}/
    ---
  HEREDOC
end
