class PhilosController < ApplicationController
  before_action :set_philo, only: [:show, :update, :edit, :destroy]

  def index
    @philos = Philo.all
    render component:"Philos", props:{philos: @philos}
  end

  def show
    render component: "Philo", props:{philo: @philo}
  end

  def new
    render component: "NewPhilo"
  end

  def create
    @philo = Philo.new(philo_params)
    if(@philo.save)
      redirect_to root_path
    end
  end

  def edit
    render component: "EditPhilo", props: {philo: @philo}
  end

  def update
    if @philo.update(philo_params)
      redirect_to root_path
    else
    end
  end

  def destroy
    @philo.destroy
    redirect_to root_path
  end

private

def set_philo
  @philo = Philo.find(params[:id])
end

def philo_params
  params.require(:philo).permit(:name, :quote)
end


end

