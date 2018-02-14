Voom::Presenters.define('depends_on') do
  depends_on :posts

  posts.each do |p|
    paragraph p
  end
end
