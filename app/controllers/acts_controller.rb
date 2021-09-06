class ActsController < ApplicationController
  before_action :set_act, only: [:show, :update, :destroy]

  # GET /acts
  def index
    @acts = Act.all

    render json: @acts
  end

  # GET /acts/1
  def show
    render json: @act
  end

  # POST /acts
  def create
    @act = Act.new(act_params)

    if @act.save
      render json: @act, status: :created, location: @act
    else
      render json: @act.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /acts/1
  def update
    if @act.update(act_params)
      render json: @act
    else
      render json: @act.errors, status: :unprocessable_entity
    end
  end

  # DELETE /acts/1
  def destroy
    @act.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_act
      @act = Act.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def act_params
      params.require(:act).permit(:title, :script_id)
    end
end
