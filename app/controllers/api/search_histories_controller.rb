class Api::SearchHistoriesController < ApplicationController
  def index
    @search_histories = SearchHistory.all.order(count: :desc).limit(5)
    render "api/search_history/index", status: 200
  end

  def create
    @search_history = SearchHistory.find_by(name: params[:name])
    
    if @search_history
      @search_history.update_columns(count: @search_history.count + 1)
      render "api/search_history/show", status: 200
    else
      @search_history = SearchHistory.create(search_history_params)

      if @search_history.save
        render "api/search_history/show", status: 200
      else
        render json: @search_history.errors.full_messages, status: 422
      end
    end
  end

  private

  def search_history_params
    params
      .require(:search_history)
      .permit(:name, :count)
  end
end
